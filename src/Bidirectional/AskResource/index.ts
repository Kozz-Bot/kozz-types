export type Entity = 'Boundary' | 'Handler' | 'Gateway';

export type AskResourcePayload = {
	/**
	 * The boundary or handler that is requesting some resource
	 */
	requester: {
		id: string;
		type: Entity;
	};
	/**
	 * The boundary or handler that should responde with the
	 * adequate resource
	 */
	responder: {
		id: string;
		type: Entity;
	};

	request: {
		id: `${string}/${number}`;
		resource: string;
		data: Record<string, any>;
	};

	timestamp: number;
};

export type ProvideResourcePayload = {
	responder: {
		id: string;
		type: Entity;
	};

	requester: {
		id: string;
		type: Entity;
	};

	request: {
		id: `${string}/${number}`;
		resource: string;
		data: Record<string, any>;
	};
	response: any;
	timestamp: number;
};
