export * from './introduction';
export * from './proxy';

export type MediaTransportType = 'b64' | 'url';

export type Media = {
	data: Base64;
	fileName: string | null;
	sizeInBytes: number | null;
	mimeType: string;
	transportType: MediaTransportType;
};

export type ContactID = string;
export type BoundaryID = string;
export type ChatID = string;

export type ContactPayload = {
	/**
	 * Name the contact choose to display publicly
	 */
	publicName: string;
	/**
	 * Name the host user give to the contact
	 */
	privateName: string;
	id: string;
	isBlocked: boolean;
	/**
	 * If the host account has added the contact
	 */
	hostAdded: boolean;
	/**
	 * If the contact is a group or a single person
	 */
	isGroup: boolean;
	/**
	 * If the contact belongs to the host account.
	 */
	isHostAccount: boolean;
};

type Base64 = string;
