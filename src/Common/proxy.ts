import { BoundaryID, ChatID } from '.';

export type Source = `${string}/*` | `${string}/${string}`;
export type Destination = string;

export type UnidirectionalProxyRequestPayload = {
	source: Source;
	destination: Destination;
	bidirectional?: false;
};

export type BidirectionalProxyRequestPayload = {
	source: Source;
	destination: Destination;
	bidirectional: true;
	keepAlive?: boolean;
	replyDirection: UnidirectionalProxyRequestPayload;
};

export type ProxyRequestPayload =
	| UnidirectionalProxyRequestPayload
	| BidirectionalProxyRequestPayload;

export type ProxyRevokePayload = {
	source: Source;
};
