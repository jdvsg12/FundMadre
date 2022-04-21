import React from 'react';
import { styled, keyframes } from '@stitches/react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { header } from '../../data/header';
import Image from 'next/image';
import generalData from '../../data/general';



const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});
//contenedor principal
const StyledContent = styled(DropdownMenuPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  padding: '0 5rem',
  margin: '0auto',
  backgroundColor: 'white',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '800ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});
//Texto interior
const itemStyles = {
  all: 'unset',
  fontSize: '$2',
  color: 'GreyText',
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  height: '3rem',
  userSelect: 'none',
  '&:focus': {
    backgroundColor: '$blueMain',
    color: '$White',
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
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
const Box = styled('div', {});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  height: 50,
  width: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$blueMain',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px $blueMain`,
  '&:hover': { backgroundColor: '184, 9%, 96%' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const Header = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  background: '$white'
})

const LogoContainer = styled('div', {
  width: '150px'
})

export const DropdownMenuDemo = () => {

  return (
    <Header>
      <Box>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton aria-label="Customise options">
              <HamburgerMenuIcon />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start'>
            {header.links.map(({ href, text }, index) => {
              return (
                <DropdownMenuItem>
                  <Link key={`${text}-${index}`} href={href}>
                    <a>{text}</a>
                  </Link>
                </DropdownMenuItem>)
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </Header>
  );
};

export default DropdownMenuDemo;

