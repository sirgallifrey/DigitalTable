import { Attribute } from './attribute';

export interface IProperties {
	attributes: Record<string,Attribute>;
	indexes: Record<string, Array<string>>;
}
