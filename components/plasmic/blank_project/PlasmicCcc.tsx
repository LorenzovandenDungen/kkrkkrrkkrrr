// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4UWuoUxBjJSz5QMN4ogHwp
// Component: L6oeE8-ab_
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 4UWuoUxBjJSz5QMN4ogHwp/projectcss
import sty from "./PlasmicCcc.module.css"; // plasmic-import: L6oeE8-ab_/css

export type PlasmicCcc__VariantMembers = {};
export type PlasmicCcc__VariantsArgs = {};
type VariantPropType = keyof PlasmicCcc__VariantsArgs;
export const PlasmicCcc__VariantProps = new Array<VariantPropType>();

export type PlasmicCcc__ArgsType = {};
type ArgPropType = keyof PlasmicCcc__ArgsType;
export const PlasmicCcc__ArgProps = new Array<ArgPropType>();

export type PlasmicCcc__OverridesType = {
  frame10?: p.Flex<"div">;
  frame8?: p.Flex<"div">;
  frame9?: p.Flex<"div">;
};

export interface DefaultCccProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCcc__RenderFunc(props: {
  variants: PlasmicCcc__VariantsArgs;
  args: PlasmicCcc__ArgsType;
  overrides: PlasmicCcc__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"frame10"}
      data-plasmic-override={overrides.frame10}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.frame10
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"frame8"}
        data-plasmic-override={overrides.frame8}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame8)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__maIR
          )}
        >
          {"login"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        data-plasmic-name={"frame9"}
        data-plasmic-override={overrides.frame9}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame9)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__c1FEx
          )}
        >
          {"close"}
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  frame10: ["frame10", "frame8", "frame9"],
  frame8: ["frame8"],
  frame9: ["frame9"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  frame10: "div";
  frame8: "div";
  frame9: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCcc__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCcc__VariantsArgs;
    args?: PlasmicCcc__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCcc__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCcc__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCcc__ArgProps,
          internalVariantPropNames: PlasmicCcc__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCcc__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "frame10") {
    func.displayName = "PlasmicCcc";
  } else {
    func.displayName = `PlasmicCcc.${nodeName}`;
  }
  return func;
}

export const PlasmicCcc = Object.assign(
  // Top-level PlasmicCcc renders the root element
  makeNodeComponent("frame10"),
  {
    // Helper components rendering sub-elements
    frame8: makeNodeComponent("frame8"),
    frame9: makeNodeComponent("frame9"),

    // Metadata about props expected for PlasmicCcc
    internalVariantProps: PlasmicCcc__VariantProps,
    internalArgProps: PlasmicCcc__ArgProps
  }
);

export default PlasmicCcc;
/* prettier-ignore-end */
