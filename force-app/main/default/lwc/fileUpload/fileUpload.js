import { LightningElement, api } from 'lwc';

export default class FileUpload extends LightningElement {
    @api
    recordId

    @api invoke() {
        
    }

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }

    handleUpload(event) {
        const uploadedFiles = event.detail.files;
        console.log('Files Uploaded : ' + JSON.stringify(uploadedFiles));

    }

}