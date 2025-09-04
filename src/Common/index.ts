export * from './introduction';
export * from './proxy';
export * from './deleteMessage';
export * from './Entities';

export type MediaTransportType = 'b64' | 'url';

export type Media = {
	data: Base64;
	fileName: string | null;
	sizeInBytes: number | null;
	duration: number | null;
	mimeType: string;
	transportType: MediaTransportType;
	stickerTags: string[] | undefined;
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

export type GroupChat = {
	id: string;
	owner: string;
	name: string;
	memberCount: number;
	description: string;
	community: string | null;
	participants: {
		id: string;
		admin: boolean;
	}[];
	unreadCount: number;
};
