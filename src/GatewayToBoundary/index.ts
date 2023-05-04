import { Media } from '../Common';

export type SendMessagePayload = {
	quoteId?: string;
	chatId: string;
	body: string;
	media?: Media;
	platform: 'WA';
	timestamp: number;
	boundaryId: string;
};
