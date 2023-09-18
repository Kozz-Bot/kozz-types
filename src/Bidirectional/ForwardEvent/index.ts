export type ForwardEventPayload = {
	sourceId: string;
	destination: {
		id: string;
		type: 'Boundary' | 'Handler';
	};
	eventName: string;
};

export type ForwardedEventPayload = {
	source: string;
	eventName: string;
	payload: any;
};
