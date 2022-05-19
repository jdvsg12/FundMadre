import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { header } from '../../data/header';
import Image from 'next/image';
import generalData from '../../data/general';


const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  position: 'fixed',
  height: '80vh',
  maxwidth: '100vh',
  margin: 2,
  backgroundColor: "white",
  borderRadius: '12px 0px',
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
});


const itemStyles = {
  all: "unset",
  fontSize: 13,
  color: '#345F97',
  fontWeight: '600',
  textTransform: 'uppercase',
  borderRadius: '12px 0px 0px 0px',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: '25%',
  width: 300,

  "&[data-disabled]": {
    color: '#345F97',
    pointerEvents: "none",
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles
});
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: '$blueMain',
    color: '$blueMain'
  },
  ...itemStyles
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: '#345F97'
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '#345F97',
  margin: 5
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "left"
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "white"
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

// Your app...
const Box = styled("div", {});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  height: 35,
  width: 35,
  borderRadius: '5px 0px 0px 0px',
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: '#345F97',
  backgroundColor: "white",
  boxShadow: `0 2px 10px gray, GrayText`,
  "&:hover": { backgroundColor: 'white' },
  "&:focus": { boxShadow: `0 0 0 2px black` }
});

export const DropdownMenuDemo = () => {

  return (
      <Box>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton>
              <HamburgerMenuIcon />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start'>
            {header.links.map(({ href, text }, index) => {
              return (
                <DropdownMenuItem key={`${text}-${index}`}>
                  <Link href={href}>
                    <a>{text}</a>
                  </Link>
                </DropdownMenuItem>)
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
  );
};

export default DropdownMenuDemo;

