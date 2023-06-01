import { MarkdownInput, MarkdownInputProps } from "sanity-plugin-markdown"
import DOMPurify from "dompurify"
import { marked } from "marked"
import { useMemo } from "react"

export function CustomMarkdownInput(props: any) {
  const reactMdeProps: MarkdownInputProps["reactMdeProps"] = useMemo(() => {
    return {
      options: {
        previewRender: (markdownText) => {
          // configure as needed according to
          // https://github.com/markedjs/marked#docs
          return DOMPurify.sanitize(marked.parse(markdownText))
        },
        //customizing using renderingConfig is also an option
      },
    }
  }, [])

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}
