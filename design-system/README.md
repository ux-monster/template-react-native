# Design System - Snacks

## Guide

1. Add react native UI/UX component to library

2. Deploy library to npm

3. Add library sample code to my expo snack

4. Copy my snack id to embed

5. Add src/snacks/XXX.snack.tsx with snack id

   ```tsx
   import React from 'react';
   import SnackContainer from '../components/SnackContainer';

   const XXX = () => {
     return <SnackContainer id="[snack_id]" />;
   };

   export default XXX;
   ```

6. Deploy design system to github page
