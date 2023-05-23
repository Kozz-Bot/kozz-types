import { type Socket } from 'socket.io';
import { BoundaryIntroduction } from '..';

export type BoundaryInstance = BoundaryIntroduction & {
	id: string;
	socket: Socket;
	signature: string;
};
