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
export type { CoreVan, MiniVan, PlateElement, PlateVan, Primitive, Props, PropValue, State, StateView }
export type UnderscoreFunc = (f:()=>PropValue)=>()=>PropValue
export type CoreTags = Readonly<Record<string, CoreTagFunc<Element>>>&{
	[K in keyof HTMLElementTagNameMap]:CoreTagFunc<HTMLElementTagNameMap[K]>
}
export type MiniTags = Readonly<Record<string, MiniTagFunc<Element, Text>>>
export type PlateTags = Readonly<Record<string, PlateTagFunc>>
export type StateVal<S extends State<unknown>> =
	S extends State<infer V>
		? V
		: never
export type ValidChildDomValue<V extends VanShape> =
	V extends CoreVan
		? CoreValidChildDomValue
		: V extends MiniVan
			? MiniValidChildDomValue<Element, Text>
			: PlateValidChildDomValue
export type BindingFunc<V extends VanShape> =
	V extends CoreVan
		? CoreBindingFunc
		: V extends MiniVan
			? MiniBindingFunc<Element, Text>
			: PlateBindingFunc
export type ChildDom<V extends VanShape> =
	V extends CoreVan
		? CoreChildDom
		: V extends MiniVan
			? MiniChildDom<Element, Text>
			: PlateChildDom
export type AddFunc<V extends VanShape> = V['add']
export type TagFunc<V extends VanShape, TagName extends keyof V['tags'] = keyof V['tags']> =
	(first?:Props | ChildDom<V>, ...rest: readonly ChildDom<V>[]) => ChildDom<V>
export type Tags<V extends VanShape> = Record<keyof V['tags'], TagFunc<V>>
export type TagsNSFunc<V extends VanShape> = V['tagsNS']
export type CommonVan = {
	readonly state:<T>(initVal:T)=>State<T>
	readonly val:<T>(s:T|StateView<T>)=>T
	readonly oldVal:<T>(s:T|StateView<T>)=>T
	readonly derive:<T>(f:()=>T)=>State<T>
	readonly _:UnderscoreFunc
}
export type VanShape = CommonVan&(MiniVan|PlateVan|CoreVan)
