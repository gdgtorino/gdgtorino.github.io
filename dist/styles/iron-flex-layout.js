import { html } from '@polymer/lit-element';
export const ironFlexLayout = html `
  <style>
    .layout.horizontal,
    .layout.vertical {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }
  
    .layout.inline {
      display: -ms-inline-flexbox;
      display: -webkit-inline-flex;
      display: inline-flex;
    }
  
    .layout.horizontal {
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      flex-direction: row;
    }
  
    .layout.vertical {
      -ms-flex-direction: column;
      -webkit-flex-direction: column;
      flex-direction: column;
    }
  
    .layout.wrap {
      -ms-flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  
    .layout.no-wrap {
      -ms-flex-wrap: nowrap;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
  
    .layout.center,
    .layout.center-center {
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  
    .layout.center-justified,
    .layout.center-center {
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
  
    .flex {
      -ms-flex: 1 1 0.000000001px;
      -webkit-flex: 1;
      flex: 1;
      -webkit-flex-basis: 0.000000001px;
      flex-basis: 0.000000001px;
    }
  
    .flex-auto {
      -ms-flex: 1 1 auto;
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
    }
  
    .flex-none {
      -ms-flex: none;
      -webkit-flex: none;
      flex: none;
    }
    
    .layout.start {
      -ms-flex-align: start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
    }
  
    .layout.center,
    .layout.center-center {
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  
    .layout.end {
      -ms-flex-align: end;
      -webkit-align-items: flex-end;
      align-items: flex-end;
    }
  
    .layout.baseline {
      -ms-flex-align: baseline;
      -webkit-align-items: baseline;
      align-items: baseline;
    }
  
    /**
     * Alignment in main axis.
     */
    .layout.start-justified {
      -ms-flex-pack: start;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
    }
  
    .layout.center-justified,
    .layout.center-center {
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
  
    .layout.end-justified {
      -ms-flex-pack: end;
      -webkit-justify-content: flex-end;
      justify-content: flex-end;
    }
  
    .layout.around-justified {
      -ms-flex-pack: distribute;
      -webkit-justify-content: space-around;
      justify-content: space-around;
    }
  
    .layout.justified {
      -ms-flex-pack: justify;
      -webkit-justify-content: space-between;
      justify-content: space-between;
    }
    
    .self-start {
      -ms-align-self: flex-start;
      -webkit-align-self: flex-start;
      align-self: flex-start;
    }
  
    .self-center {
      -ms-align-self: center;
      -webkit-align-self: center;
      align-self: center;
    }
  
    .self-end {
      -ms-align-self: flex-end;
      -webkit-align-self: flex-end;
      align-self: flex-end;
    }
  
    .self-stretch {
      -ms-align-self: stretch;
      -webkit-align-self: stretch;
      align-self: stretch;
    }
  
    .self-baseline {
      -ms-align-self: baseline;
      -webkit-align-self: baseline;
      align-self: baseline;
    }
    
    .layout.start-aligned {
      -ms-flex-line-pack: start;  /* IE10 */
      -ms-align-content: flex-start;
      -webkit-align-content: flex-start;
      align-content: flex-start;
    }
  
    .layout.end-aligned {
      -ms-flex-line-pack: end;  /* IE10 */
      -ms-align-content: flex-end;
      -webkit-align-content: flex-end;
      align-content: flex-end;
    }
  
    .layout.center-aligned {
      -ms-flex-line-pack: center;  /* IE10 */
      -ms-align-content: center;
      -webkit-align-content: center;
      align-content: center;
    }
  
    .layout.between-aligned {
      -ms-flex-line-pack: justify;  /* IE10 */
      -ms-align-content: space-between;
      -webkit-align-content: space-between;
      align-content: space-between;
    }
  
    .layout.around-aligned {
      -ms-flex-line-pack: distribute;  /* IE10 */
      -ms-align-content: space-around;
      -webkit-align-content: space-around;
      align-content: space-around;
    }
  </style>
`;
//# sourceMappingURL=iron-flex-layout.js.map