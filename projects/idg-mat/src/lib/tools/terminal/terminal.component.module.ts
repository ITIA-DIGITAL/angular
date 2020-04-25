import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'idg-mat-terminal',
    template: `
        <div class="terminal">
            <div class="code">
                <pre>IDG {{ title }}> </pre>
                <pre>{{ code }}</pre>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            .terminal {
                margin: 8px 8px;
                position: relative;
                width: auto;
                border-radius: 6px;
                padding-top: 45px;
                overflow: hidden;
                background-color: rgb(15, 15, 16);
            }

            .code {
                width: 100%;
                height: 100%;
                overflow: auto;
            }

            .terminal::before {
                content: '\\2022 \\2022 \\2022';
                position: absolute;
                top: 0;
                left: 0;
                height: 4px;
                background: rgb(58, 58, 58);
                color: #c2c3c4;
                width: 100%;
                font-size: 2rem;
                line-height: 0;
                padding: 14px 0;
                text-indent: 4px;
            }

            .terminal pre {
                font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
                color: white;
                padding: 0 1rem 1rem;
                margin: 0;
            }
        `
    ]
})
export class TerminalComponent implements OnInit {
    @Input() title: string;
    @Input() code: string;

    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    declarations: [TerminalComponent],
    exports: [TerminalComponent],
    imports: [CommonModule]
})
export class TerminalModule {}
