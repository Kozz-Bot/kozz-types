import { BoundaryID, ChatID } from '.';

export type Source = `${BoundaryID}/*` | `${BoundaryID}/${ChatID}`;
export type Destination = BoundaryID | BoundaryID[];

export type UnidirectionalProxyRequestPayload = {
	source: Source;
	destination: Destination;
	bidirectional?: false;
};

export type BidirectionalProxyRequestPayload = {
	source: Source;
	destination: Destination;
	bidirectional: true;
	replyDirection: UnidirectionalProxyRequestPayload;
};

export type ProxyRequestPayload =
	| UnidirectionalProxyRequestPayload
	| BidirectionalProxyRequestPayload;

export type ProxyRevokePayload = {
	source: Source;
};
