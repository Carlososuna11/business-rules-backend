const URLS = {
	PROJECTS: {
		base: 'api/projects',
		createProject: '/',
		uploadProject: '/upload/',
		listProjects: '/',
		getProject: '/:uuid/',
		updateProject: '/:uuid/',
		deleteProject: '/:uuid/',
		getEngine: '/:uuid/engine/',
		setEngine: '/:uuid/engine/',
		getContext: '/:uuid/context/',
		setContext: '/:uuid/context/',
		getDiagram: '/:uuid/diagram/',
	},
	ENGINE: {
		base: 'api/engine',
		getCommands: '/commands/',
		toDiagram: 'to-diagram',
	},
	CONTEXT: {
		base: 'api/contexts',
		getStaticContexts: '/',
	},
};

export default URLS;
