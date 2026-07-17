import { BoundaryIntroduction, EventListener, SocketLike } from '..';

export type BoundaryInstance = BoundaryIntroduction & {
	id: string;
	name: string;
	socket: SocketLike;
	signature: string;
	listeners: EventListener[];
};
