import { defineCollection, z } from 'astro:content';

// Colección de Investigación
const investigacionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        area: z.enum(['bioinformatica', 'neuroinformatica', 'sistemas-dinamicos', 'data-science']),
        image: z.string().optional(),
        pubDate: z.date().optional(),
        featured: z.boolean().optional(),
    }),
});

// Colección de Tecnología
const tecnologiaCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        version: z.string().optional(),
        downloadUrl: z.string().optional(),
        screenshots: z.array(z.string()).optional(),
        features: z.array(z.string()).optional(),
        category: z.enum(['software', 'herramienta', 'libreria']).optional(),
    }),
});

// Colección de Equipo
const equipoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.enum(['responsable', 'coautor', 'estudiante', 'colaborador']),
        bio: z.string(),
        image: z.string().optional(),
        email: z.string().optional(),
        orcid: z.string().optional(),
        researchGate: z.string().optional(),
        googleScholar: z.string().optional(),
    }),
});

// Colección de Docencia
const docenciaCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        type: z.enum(['tesis', 'taller', 'curso', 'texto', 'servicio-social']),
        year: z.number().optional(),
        author: z.string().optional(),
        institution: z.string().optional(),
    }),
});

// Colección de Proyectos
const proyectosCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['investigacion', 'docencia', 'arte-ciencia']),
        year: z.number().optional(),
        collaborators: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});

// Colección de Vinculación
const vinculacionCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        type: z.enum(['colaboracion-academica', 'gobierno', 'conacyt', 'gobierno-industria']),
        organization: z.string().optional(),
        year: z.number().optional(),
    }),
});

// Colección de Galería
const galeriaCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['sistemas-dinamicos', 'fractales', 'redes-complexas', 'caos']),
        thumbnail: z.string().optional(),
        script: z.string(), // Nombre del archivo sketch en src/scripts/sketches/
        featured: z.boolean().default(false),
        instructions: z.string().optional(), // Cómo interactuar
    }),
});

export const collections = {
    'investigacion': investigacionCollection,
    'tecnologia': tecnologiaCollection,
    'equipo': equipoCollection,
    'docencia': docenciaCollection,
    'proyectos': proyectosCollection,
    'vinculacion': vinculacionCollection,
    'galeria': galeriaCollection,
};
