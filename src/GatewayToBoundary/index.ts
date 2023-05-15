import { ContactPayload, Media, Platform } from '../Common';

export type SendMessagePayload = {
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
	messageBody: string;
	messageId: string;
	chatId: string;
	emote: string;
	platform: Platform;
	timestamp: number;
	boundaryId: string;
	contact: ContactPayload;
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
