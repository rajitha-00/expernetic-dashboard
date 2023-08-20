import React from 'react'
import NestedAccordion from './NestedAccordion'

const Accordion = () => {
  return (
    <>
      <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        </NestedAccordion>
        </NestedAccordion>
      </NestedAccordion>
      <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        </NestedAccordion>
        </NestedAccordion>
      </NestedAccordion>
      <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        </NestedAccordion>
        </NestedAccordion>
      </NestedAccordion>
      <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        </NestedAccordion>
        </NestedAccordion>
      </NestedAccordion>
      <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        <NestedAccordion title="Folder">
        </NestedAccordion>
        </NestedAccordion>
      </NestedAccordion>
    </>
  )
}

export default Accordion
