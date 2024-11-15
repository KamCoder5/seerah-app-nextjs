export interface TopicDetail {
	code: string;
	description: string;
}

export const TOPIC_CODES = {
	ARABIA_BEFORE_ISLAM: "ARABIA_BEFORE_ISLAM",
	LINEAGE_AND_BIRTH: "LINEAGE_AND_BIRTH",
	LIFE_BEFORE_PROPHETHOOD: "LIFE_BEFORE_PROPHETHOOD",
	MECCAN_PERIOD: "MECCAN_PERIOD",
	MEDINAN_PERIOD: "MEDINAN_PERIOD",
	CONQUEST_AND_AFTERMATH: "CONQUEST_AND_AFTERMATH",
	FINAL_DAYS_AND_LEGACY: "FINAL_DAYS_AND_LEGACY",
	UNKNOWN_TOPIC: "UNKNOWN_TOPIC",
} as const;

export const TOPIC_DESCRIPTIONS: Record<string, string> = {
	[TOPIC_CODES.ARABIA_BEFORE_ISLAM]: "Arabia Before Islam",
	[TOPIC_CODES.LINEAGE_AND_BIRTH]: "Lineage and Birth of the Prophet",
	[TOPIC_CODES.LIFE_BEFORE_PROPHETHOOD]: "Life Before Prophethood",
	[TOPIC_CODES.MECCAN_PERIOD]: "Quranic Years - Meccan Period",
	[TOPIC_CODES.MEDINAN_PERIOD]: "Quranic Years - Medinan Period",
	[TOPIC_CODES.CONQUEST_AND_AFTERMATH]: "Quranic Years - The Conquest of Mecca & Aftermath",
	[TOPIC_CODES.FINAL_DAYS_AND_LEGACY]: "The Final Days, Farewell, & Legacy",
	[TOPIC_CODES.UNKNOWN_TOPIC]: "Unknown topic",
};

export function getTopicDescription(code: string): string {
	return TOPIC_DESCRIPTIONS[code] || TOPIC_DESCRIPTIONS[TOPIC_CODES.UNKNOWN_TOPIC];
}
