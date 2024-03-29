import { type Socket } from 'socket.io';
import { BoundaryIntroduction, EventListener } from '..';

export type BoundaryInstance = BoundaryIntroduction & {
	id: string;
	name: string;
	socket: Socket;
	signature: string;
	listeners: EventListener[];
};
