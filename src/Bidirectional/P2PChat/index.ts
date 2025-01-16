import { MessageType } from 'src/BondaryToGateway';
import { Media } from 'src/Common';

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
