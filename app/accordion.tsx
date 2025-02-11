/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  AccordionItemProvider,
  AccordionProvider,
  useAccordionContext,
  useAccordionItemContext,
} from './accordion-context';

import { useState } from 'react';

type WithChildren = {
  children: React.ReactNode;
};
type AccordionProps = WithChildren;
type AccordionItemProps = WithChildren & {
  id: string | null;
};
type AccordionTriggerProps = WithChildren;
type AccordionContentProps = WithChildren;

/**
 *
 * @param children: React.ReactNode
 */
export const Accordion = ({ children }: AccordionProps) => {
  return <AccordionProvider>{children}</AccordionProvider>;
};

/**
 *
 * @param children: React.ReactNode
 * @param id: string | null
 */
export const AccordionItem = ({ children, id }: AccordionItemProps) => {
  return (
    <>
      <AccordionItemProvider id={id}>{children}</AccordionItemProvider>
    </>
  );
};

/**
 *
 * @param children: React.ReactNode
 */
export const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
  const context = useAccordionContext();
  const item = useAccordionItemContext();
  // context can be null
  if (!context || !item) return null;

  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => {
    context?.handleTrigger(item?.id);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <button
          className='flex flex-row justify-between w-full content-center items-center'
          onClick={handleTrigger}
        >
          {children}
          <svg
            className=' w-10 h-10 p-2 transition-all'
            width='15'
            height='15'
            viewBox='0 0 10 10'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d={isOpen ? 'M9 5L5 9L1 5' : 'M1 5L5 1L9 5'} />
          </svg>
        </button>
      </div>
    </>
  );
};

/**
 *
 * @param children: React.ReactNode
 * @returns
 */
export const AccordionContent = ({ children }: AccordionContentProps) => {
  const context = useAccordionContext();
  const item = useAccordionItemContext();
  console.log(item?.id);
  return (
    <>{context?.activeContent === item?.id ? <div>{children}</div> : null}</>
  );
};
