export type BoundaryIdentifier = 'boundary';
export type HandlerIdentifier = 'handler';

export type Role = BoundaryIdentifier | HandlerIdentifier;

// [TODO]: Add support for other platforms
export type Platform = 'WA';

export type BoundaryIntroduction = {
	role: BoundaryIdentifier;
	platform: Platform;
	OS: NodeJS.Platform;
	timestamp: number;
	id?: string;
	signature: string;
};

export type HandlerIntroduction = {
	role: HandlerIdentifier;
	name: string;
	methods: string[];
	timestamp: number;
	signature: string;
};

export type Introduction = BoundaryIntroduction | HandlerIntroduction;

export type SignaturelessPayload<Payload extends Introduction> = Omit<
	Payload,
	'signature'
>;
