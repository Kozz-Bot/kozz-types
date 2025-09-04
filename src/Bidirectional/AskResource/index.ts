export type EntityType = 'Boundary' | 'Handler' | 'Gateway';

export type AskResourcePayload = {
	/**
	 * The boundary or handler that is requesting some resource
	 */
	requester: {
		id: string;
		type: EntityType;
	};
	/**
	 * The boundary or handler that should responde with the
	 * adequate resource
	 */
	responder: {
		id: string;
		type: EntityType;
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
		type: EntityType;
	};

	requester: {
		id: string;
		type: EntityType;
	};

	request: {
		id: `${string}/${number}`;
		resource: string;
		data: Record<string, any>;
	};
	response: any;
	timestamp: number;
};
