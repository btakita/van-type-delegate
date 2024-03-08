/// <reference lib="dom" />
import type {
	BindingFunc as MiniBindingFunc,
	ChildDom as MiniChildDom,
	TagFunc as MiniTagFunc,
	ValidChildDomValue as MiniValidChildDomValue,
	Van as MiniVan
} from 'mini-van-plate'
import type {
	BindingFunc as PlateBindingFunc,
	ChildDom as PlateChildDom,
	Element as PlateElement,
	Primitive,
	Props,
	PropValue,
	State,
	StateView,
	TagFunc as PlateTagFunc,
	ValidChildDomValue as PlateValidChildDomValue,
	Van as PlateVan
} from 'mini-van-plate/van-plate'
import type {
	BindingFunc as CoreBindingFunc,
	ChildDom as CoreChildDom,
	TagFunc as CoreTagFunc,
	ValidChildDomValue as CoreValidChildDomValue,
	Van as CoreVan
} from 'vanjs-core'
export type {
	CoreBindingFunc,
	CoreChildDom,
	CoreTagFunc,
	CoreValidChildDomValue,
	CoreVan,
	MiniBindingFunc,
	MiniChildDom,
	MiniTagFunc,
	MiniValidChildDomValue,
	MiniVan,
	PlateBindingFunc,
	PlateChildDom,
	PlateElement,
	PlateTagFunc,
	PlateValidChildDomValue,
	PlateVan,
	Primitive,
	Props,
	PropValue,
	State,
	StateView
}
export type UnderscoreFunc = (f:()=>PropValue)=>()=>PropValue
export type CoreTags = Readonly<Record<string, CoreTagFunc<Element>>>&{
	[K in keyof HTMLElementTagNameMap]:CoreTagFunc<HTMLElementTagNameMap[K]>
}
export type MiniTags = Readonly<Record<string, MiniTagFunc<Element, Text>>>
export type PlateTags = Readonly<Record<string, PlateTagFunc>>
export type StateVal<S extends State<unknown>> =
	S extends State<infer V>
		? V
		: unknown
export type ValidChildDomValue<V extends VanShape> = (
	CoreValidChildDomValue|MiniValidChildDomValue<Element, Text>|PlateValidChildDomValue
	)&V extends CoreVan
	? CoreValidChildDomValue
	: V extends MiniVan
		? MiniValidChildDomValue<Element, Text>
		: PlateValidChildDomValue
export type BindingFunc<V extends VanShape> = (
	CoreBindingFunc|MiniBindingFunc<Element, Text>|PlateBindingFunc
	)&V extends CoreVan
	? CoreBindingFunc
	: V extends MiniVan
		? MiniBindingFunc<Element, Text>
		: PlateBindingFunc
export type ChildDom<V extends VanShape> = (
	CoreChildDom|MiniChildDom<Element, Text>|PlateChildDom
	)&
	V extends CoreVan
	? CoreChildDom
	: V extends MiniVan
		? MiniChildDom<Element, Text>
		: PlateChildDom
export type AddFunc<V extends VanShape> =
	V extends CoreVan
		? CoreVan['add']
		: V extends MiniVan
			? MiniVan['add']
			: PlateVan['add']
export type TagFunc<V extends VanShape> =
	(first?:Props|ChildDom<V>, ...rest:readonly ChildDom<V>[])=>ChildDom<V>
export type Tags<V extends VanShape> =
	V extends CoreVan
		? Record<keyof CoreVan['tags'], TagFunc<CoreVan>>
		: V extends MiniVan
			? Record<keyof MiniVan['tags'], TagFunc<MiniVan>>
			: Record<keyof PlateVan['tags'], TagFunc<PlateVan>>
export type CommonVan = {
	readonly state:<T>(initVal:T)=>State<T>
	readonly val:<T>(s:T|StateView<T>)=>T
	readonly oldVal:<T>(s:T|StateView<T>)=>T
	readonly derive:<T>(f:()=>T)=>State<T>
	readonly _:UnderscoreFunc
}
export type VanShape = MiniVan|PlateVan|CoreVan
