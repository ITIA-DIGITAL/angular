export type FileTypes =
    | 'documents'
    | 'default'
    | 'custom'
    | 'image'
    | 'audio'
    | 'video'
    | 'excel'
    | 'word'
    | 'pdf'
    | 'csv';

const image = 'image/jpg image/jpeg image/png image/ico image/svg image/bpm image/webp image/gif image/bpm';
const powerpoint = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
const word = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const excel = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const pdf = 'application/pdf';
const csv = 'text/csv';

const documents = `${powerpoint} ${word} ${excel} ${pdf}`;
const defaultDocuments = `${documents} ${image}`;

export const fileType = {
    get custom() {
        return {
            type: `${this.pdf.type} ${this.word.type} ${this.excel.type}`,
            extensions: `${this.pdf.extensions},${this.word.extensions},${this.excel.extensions}`,
            icon: 'insert_drive_file'
        };
    },
    documents: {
        type: documents,
        extensions: '.pdf, .doc,.docx, .xlsx,.xls, .ppt,.pptx',
        icon: 'file_copy'
    },
    pdf: {
        type: pdf,
        extensions: '.pdf',
        icon: 'picture_as_pdf'
    },
    word: {
        type: word,
        extensions: '.doc,.docx',
        icon: 'insert_drive_file'
    },
    excel: {
        type: excel,
        extensions: '.xlsx,.xls',
        icon: 'filter_9_plus'
    },
    csv: {
        type: csv,
        extensions: '.csv',
        icon: 'list_alt'
    },
    powerpoint: {
        type: powerpoint,
        extensions: '.ppt,.pptx',
        icon: 'photo_size_select_actual'
    },
    image: {
        type: image,
        extensions: 'image/*',
        icon: 'filter'
    },
    audio: {
        type: 'audio/mp3',
        extensions: 'audio/*',
        icon: 'audiotrack'
    },
    video: {
        type: 'video/mp4',
        extensions: 'video/*',
        icon: 'movie_filter'
    },
    default: {
        type: defaultDocuments,
        extensions: 'image/*,.pdf, .doc,.docx, .xlsx,.xls, .ppt,.pptx',
        icon: 'attachment'
    }
};
