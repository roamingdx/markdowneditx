import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import javascript from 'highlight.js/lib/languages/javascript'
import markdown from 'highlight.js/lib/languages/markdown'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Highlight from '@tiptap/extension-highlight'
import { createLowlight } from 'lowlight'
import 'highlight.js/styles/tokyo-night-dark.css'
import { 
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxDownload,
  RxLink1
} from 'react-icons/rx';
import { BubbleButton } from './BubbleButton';
import Placeholder from '@tiptap/extension-placeholder'
import { useState } from 'react';
import TurndownService from 'turndown';
import Link from '@tiptap/extension-link';

const turndownService = new TurndownService();

const lowlight = createLowlight({
  javascript,
  markdown
});

const Editor = ({ themeIsToggled }: any) => {
  const [markdownContent, setMarkdownContent] = useState('');

  const editor = useEditor({
    extensions: [
      Link,
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write something... Formatting will take place after you select a particular field (or the entire document), whether to style the fonts, add links or save your document.'
      }),
      Highlight.configure({
        multicolor: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      const markdownContent = turndownService.turndown(htmlContent);
      setMarkdownContent(markdownContent);
    },
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  });

  const handleSave = () => {
    const documentName = prompt("What will be the name of the document?");
    if (documentName !== null) {
      const blob = new Blob([markdownContent], { type: 'text/markdown' });
      const a = document.createElement('a');

      a.href = window.URL.createObjectURL(blob);
      a.download = documentName + '.md';
      a.click();
    }
};

  return (
    <>
      <EditorContent
        className={themeIsToggled ? 'max-w-full w-[818px] mx-auto prose prose-invert prose-lime m-0 pt-12':
        'max-w-full w-[818px] mx-auto prose prose-lime m-0 pt-12'}
        editor={editor}
      />
      {editor && (
        <BubbleMenu className={themeIsToggled ? 'text-slate-50 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600' :
        'text-slate-950 bg-zinc-50 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600'} 
        editor={editor}>
          <div className='flex items-center'>
            <BubbleButton 
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}  
            >
              <RxFontBold className='w-4 h-4'/>
            </BubbleButton>
            <BubbleButton 
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}  
              >
              <RxFontItalic className='w-4 h-4' />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}  
            >
              <RxStrikethrough className='w-4 h-4' />
            </BubbleButton>
            <BubbleButton onClick={handleSave}>
              <RxDownload className='w-4 h-4' />
            </BubbleButton>
            <BubbleButton 
              onClick={() => {
                const href = prompt('Enter URL for the link:');
                if (href !== null) return editor.chain().focus().toggleLink({ href }).run();
              }}
                data-active={editor.isActive('link')}
              >
                <RxLink1 className='w-4 h-4' />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )} 
    </>
  )
}

export default Editor;
