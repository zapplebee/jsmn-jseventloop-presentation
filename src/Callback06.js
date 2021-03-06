import React from 'react'
import Section from './Section'
import asset from './images/stack-basic.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <div style={{width: '100%', display: 'flex'}} dangerouslySetInnerHTML={{__html: `      <svg
        viewBox="0 0 550.17517 691.14581"
        style="height: 80vh; align-self: center; margin: auto"
      >
        <defs
          id="defs2">
          <marker
            style="overflow:visible"
            id="Arrow1Lend"
            refX="0"
            refY="0"
            orient="auto">
            <path
              transform="matrix(-0.8,0,0,-0.8,-10,0)"
              style="fill:#2e4a3f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1.00000003pt;stroke-opacity:1"
              d="M 0,0 5,-5 -12.5,0 5,5 Z"
              id="path951" />
          </marker>
        </defs>
        <g
          transform="translate(-235.02321,-5391.8031)"
          id="layer1">
          <path
            id="path831"
            d="m 335.399,5841.6024 v 126.6077 l 429.79938,-429.7994 v -126.6076 z"
            style="opacity:1;fill:#dbc3fe;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <rect
            y="5416.2456"
            x="264.32108"
            height="581.95056"
            width="101.06394"
            id="rect817"
            style="opacity:1;fill:#82e2fe;fill-opacity:1;stroke:none;stroke-width:0.98753875;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
          <text
       id="text938"
       y="5522.3823"
       x="253.46071"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:1.25;font-family:Roboto;-inkscape-font-specification:Roboto;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
><tspan
         y="5522.3823"
         x="253.46071"
         id="tspan936">STACK</tspan></text>
    <text
       id="text942"
       y="5515.6528"
       x="656.75848"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:1.25;font-family:Roboto;-inkscape-font-specification:Roboto;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
><tspan
         style="text-align:center;text-anchor:middle"
         y="5515.6528"
         x="656.75848"
         id="tspan940">CALLBACK</tspan><tspan
         style="text-align:center;text-anchor:middle"
         id="tspan944"
         y="5565.6528"
         x="656.75848">QUEUE</tspan></text>
          <path
            id="path946"
            d="m 310.28378,5992.6677 -0.74767,70.2812"
            style="opacity:1;fill:#2e4a3f;fill-opacity:1;stroke:none;stroke-width:3.5999999;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker-end:url(#Arrow1Lend)" />
        </g>
      </svg>`}}>



    </div>
  </Section>
)