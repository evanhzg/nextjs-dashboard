import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const directory = path.join(process.cwd(), 'public', 'customers');
  const filenames = fs.readdirSync(directory);
  
  const customerImages = filenames
    .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map(file => ({
      src: `/customers/${file}`,
      name: path.parse(file).name
    }));

  return NextResponse.json(customerImages);
}
