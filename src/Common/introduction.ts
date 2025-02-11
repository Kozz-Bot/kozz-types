export type BoundaryIdentifier = 'boundary';
export type HandlerIdentifier = 'handler';

export type Role = BoundaryIdentifier | HandlerIdentifier;

// [TODO]: Add support for other platforms
export type Platform = 'WWebJS' | 'Baileys' | 'other';

export type BoundaryIntroduction = {
	role: BoundaryIdentifier;
	name: string;
	platform: Platform;
	OS: NodeJS.Platform;
	signature: string;
};

export type HandlerIntroduction = {
	role: HandlerIdentifier;
	name: string;
	methods: string[];
	signature: string;
};

export type DashboardSignature = {
	role: 'Dashboard';
	key: string;
};

export type Introduction =
	| BoundaryIntroduction
	| HandlerIntroduction
	| DashboardSignature;

export type SignaturelessPayload<Payload extends Introduction> = Omit<
	Payload,
	'signature'
>;
