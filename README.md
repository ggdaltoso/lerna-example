# Lerna Example

This repo contains three packages or projects:

- `header` (React Component)
- `footer` (React Component)
- `nextapp` (an app written using the NextJS framework which depends on both `header` and `footer`)
- `storybook` (an app written using the Storybook framework which shows on both `header` and `footer` components)

```
root # it uses yarn
 ├─ .stackblitzrc # startCommand: 'yarn workspace nextapp dev'
 └─ packages
      ├─ footer
      │   # no config
      ├─ header
      │   # no config
      ├─ nextapp
      │   └── package.json # startCommand: 'yarn dev'
      └─ storybook
          └── .stackblitzrc # startCommand: 'yarn storybook'
```
