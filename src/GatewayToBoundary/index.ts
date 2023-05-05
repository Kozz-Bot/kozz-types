import { Media, Platform } from '../Common';

export type SendMessagePayload = {
	quoteId?: string;
	chatId: string;
	body: string;
	media?: Media;
	platform: Platform;
	timestamp: number;
	boundaryId: string;
};

export type ReactToMessagePayload = {
	messageBody: string;
	messageId: string;
	chatId: string;
	emote: string;
	platform: Platform;
	timestamp: number;
	boundaryId: string;
};
