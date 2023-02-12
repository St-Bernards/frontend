import React, { useState, useEffect } from "react";

export function HeaderTitle(props) {
  return (
    <link className="hover:text-primary3 duration-200 z-50" href={props.href}>
      {props.message}
    </link>
  );
}

export function HeaderButton(props) {
  return (
    <link
      className="text-black  bg-white hover:bg-primary3 duration-300 py-2 px-7 rounded-full z-50"
      href={props.href}
    >
      {props.message}
    </link>
  );
}

export function FooterTitle(props) {
  return (
    <link className="hover:text-primary3 duration-200 z-50" href={props.href}>
      {props.title}
    </link>
  );
}

export function HeroButton(props) {
  return (
    <link
      className="text-white hover:text-black hover:bg-white bg-primary3 duration-300 py-2 px-5 rounded-full"
      href={props.href}
    >
      {props.message}
    </link>
  );
}

export function FullyIntegratedCard(props) {
  return (
    <div className="flex flex-col items-center justify-start rounded-lg bg-primary3 bg-opacity-50 p-8 w-[420px] h-[235px] gap-6 text-center">
      <div className="text-xl font-bold">{props.title}</div>
      <div className="text-sm text-gray-200">{props.text}</div>
    </div>
  );
}

export function FooterSocial(props) {
  return (
    <link href={props.href}>
      <image src={props.logo} />
    </link>
  );
}
