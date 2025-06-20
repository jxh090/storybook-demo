# Creating a New Documentation File in Storybook

This file explains how to add a new documentation page to your Storybook instance and map it to a location in the Storybook sidebar using the `Meta` import and tag.

---

## 1. Create a New MDX File

1. In your project, navigate to the `src/docs` directory (or wherever your docs are stored).
2. Create a new file, for example:  
   ```
   src/docs/MyComponentDocs.mdx
   ```

## 2. Add the Meta Tag

At the top of your new MDX file, import the `Meta` component and set the `title` property.  
This `title` determines where your doc appears in the Storybook sidebar.

```mdx
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Docs/My Component" />
```

- The `title` should be unique and can include slashes to create sidebar groups (e.g., `Docs/My Component`).

## 3. Add Your Documentation Content

Write your documentation using Markdown and MDX syntax below the `Meta` tag:

```mdx
# My Component

This is the documentation for `MyComponent`.
```

## 4. View in Storybook

- Start or refresh your Storybook instance.
- Your new documentation page will appear in the sidebar at the location specified by the `title` in the `Meta` tag.
