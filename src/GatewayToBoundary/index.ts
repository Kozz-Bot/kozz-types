import { ContactPayload, Media, Platform, InteractiveButtons } from '../Common';

/**
 * [TODO]: Find a way to tag people
 */
export type SendMessagePayload = {
	interactive?: InteractiveButtons;
	quoteId?: string;
	chatId: string;
	body: string;
	media?: Media;
	platform: Platform;
	timestamp: number;
	boundaryId: string;
	contact: ContactPayload;
};

export type ReactToMessagePayload = {
	messageId: string;
	emote: string;
	boundaryId: string;
};

export type SendMediaPayload = {
	quoteId?: string;
	chatId: string;
	body: string;
	media?: Media;
	platform: Platform;
	timestamp: number;
	boundaryId: string;
	contact: ContactPayload;
};

export type EditMessagePayload = {
	messageId: string;
	boundaryId: string;
	newContent: {
		body: string;
		media?: Media;
		quotedMessageId?: string;
	};
};
