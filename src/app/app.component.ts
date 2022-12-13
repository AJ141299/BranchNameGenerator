import { Component, OnInit } from '@angular/core';

enum Options {
	feature,
	bugfix,
	other
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
	public options = Options;
	public option: Options = Options.feature;
	public branch: string = '';
	public result: string = ``;
	public otherText: string = '';

	ngOnInit() {
		this.computeResult();
	}
	
	computeResult() {
		const prefix = this.option == Options.other
			? this.otherText
			: Options[this.option];
		const branchName = this.branch.split(" ").join("-");
		this.result = `${prefix}/${branchName}`;
	}

	setOption(target: any) {
		this.option = target.value;
		this.computeResult();
	}

	setBranch(target: any) {
		this.branch = target.value;
		this.computeResult();
	}

	setOtherText(target: any) {
		this.otherText = target.value;
		this.computeResult();
	}

	copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
	}
}
