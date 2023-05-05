export * from './introduction';

export type Media = {
	data: Base64;
	fileName: string | null;
	sizeInBytes: number | null;
	mimeType: string;
};

export type ContactID = string;

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
};

type Base64 = string;
