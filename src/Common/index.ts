export type Media = {
	data: Base64;
	fileName: string | null;
	sizeInBytes: number | null;
	mimeType: string;
};

export type ContactID = string;

type Base64 = string;

export type MessageID = {
	fromHostAccount: boolean;
	remote: ContactID;
	id: string;
};
