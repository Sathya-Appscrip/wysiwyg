import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CKEditorModule } from 'ng2-ckeditor';
import { apiServiceManager } from './api.services';
import { MatSelectModule, MatInputModule, MatButtonModule , MatToolbarModule } from '@angular/material';

declare var CKEDITOR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ckeditorContent: any = '<p>Click on Lookup Synonyms Button to search for synonyms</p>';
  ckeConfig: any;
  caretPos: number = 0;
  data: any;
  synonyms:any;
  selectedSynonym:any;

  color = 'primary';
  loading :boolean = false;
  value = 33.33;
  bufferValue = 66.66;

  @ViewChild("ckeditor") ckeditor: any;

  constructor(private _apiServiceManager: apiServiceManager) { }

  ngOnInit() {

    this.ckeConfig = {
      height: 300,
      language: "en",
      allowedContent: true,
      extraPlugins: "divarea",
      toolbar: [
        { name: "editing", items: ["Scayt", "Find", "Replace", "SelectAll"] },
        { name: "clipboard", items: ["Cut", "Copy", "Paste", "PasteText", "PasteFromWord", "-", "Undo", "Redo"] },
        { name: "links", items: ["Link", "Unlink", "Anchor"] },
        { name: "tools", items: ["Maximize", "ShowBlocks", "Preview", "Print", "Templates"] },
        { name: "document", items: ["Source"] },
        { name: "insert", items: ["Image", "Table", "HorizontalRule", "SpecialChar", "Iframe", "imageExplorer"] },
        "/",
        { name: "basicstyles", items: ["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript", "-", "RemoveFormat"] },
        { name: "paragraph", items: ["NumberedList", "BulletedList", "-", "Outdent", "Indent", "CreateDiv", "-", "Blockquote"] },
        { name: "justify", items: ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"] },
        { name: "styles", items: ["Styles", "Format", "FontSize", "-", "TextColor", "BGColor"] }
      ]
    };

  }


  getSynonyms() {
    this.loading = true;

    this._apiServiceManager.getSynonyms(this.data).subscribe(result => {
      console.log("Search String", result)
      this.synonyms = result;
      this.loading = false; 
    })
  }

  onSelectCat(selectedSynonym){
    this.ckeditorContent = selectedSynonym;
  }




}
