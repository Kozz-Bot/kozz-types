export type ForwardEventPayload = {
	sourceId: string;
	destination: {
		id: string;
		type: 'Boundary' | 'Handler';
	};
	eventName: string;
};
