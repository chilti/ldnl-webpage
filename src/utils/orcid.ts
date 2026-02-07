
export interface OrcidWork {
    title: string;
    journal: string;
    year: string;
    url: string;
    type: string;
    authors: string[];
    doi?: string;
}

export async function getOrcidWorks(orcidId: string): Promise<OrcidWork[]> {
    try {
        const response = await fetch(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            console.error(`Error fetching ORCID data for ${orcidId}: ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        const works = data.group.map((group: any) => {
            const workSummary = group['work-summary'][0];

            const title = workSummary.title.title.value;
            const journal = workSummary['journal-title'] ? workSummary['journal-title'].value : '';
            const year = workSummary['publication-date']?.year?.value || '';
            const url = workSummary.url?.value || '';
            const type = workSummary.type;

            // Intentar obtener DOI
            let doi = '';
            if (workSummary['external-ids']?.['external-id']) {
                const doiObj = workSummary['external-ids']['external-id'].find((id: any) => id['external-id-type'] === 'doi');
                if (doiObj) {
                    doi = doiObj['external-id-value'];
                }
            }

            return {
                title,
                journal,
                year,
                url,
                type,
                authors: [], // La API de resumen de works no siempre trae todos los autores, se requeriría una llamada extra por work
                doi
            };
        });

        return works;
    } catch (error) {
        console.error(`Error fetching ORCID data for ${orcidId}:`, error);
        return [];
    }
}
