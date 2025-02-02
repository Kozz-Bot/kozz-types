import { MessageType } from '../../BondaryToGateway';
import { Media } from '../../Common';

export type NewMessage =
	| {
			messageType: 'TEXT';
			body: string;
			boundaryName: string;
			chatId: string;
	  }
	| {
			messageType: Exclude<MessageType, 'TEXT'>;
			body: string | null;
			media: Media;
			boundaryName: string;
			chatId: string;
	  };
