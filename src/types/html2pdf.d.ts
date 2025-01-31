declare module 'html2pdf.js' {
  interface Options {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: { type?: string; quality?: number };
    html2canvas?: any;
    jsPDF?: any;
  }

  function html2pdf(): {
    from(element: HTMLElement): any;
    set(options: Options): any;
    save(): Promise<void>;
  };

  export = html2pdf;
}
