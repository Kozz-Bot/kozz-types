import {
	ForwadableUserMentioned,
	ForwardableUserJoinedGroup,
	ForwardableUserKickedFromGroup,
	ForwardableUserLeftGroup,
} from '..';

type ForwardedEvent<Payload> = {
	boundaryName: string;
	timestamp: number;
	payload: Payload;
};

export type UserJoinedGroup = ForwardedEvent<ForwardableUserJoinedGroup>;
export type UserLeftGroup = ForwardedEvent<ForwardableUserLeftGroup>;
export type HostMentioned = ForwardedEvent<ForwadableUserMentioned>;
export type UserKickedFromGroup = ForwardedEvent<ForwardableUserKickedFromGroup>;
