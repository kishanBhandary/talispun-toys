/**
 * Provides data-access helpers for retrieving category records used by the
 * game's catalog filters.
 */
import { asc } from 'drizzle-orm';
import { categories } from '../../db/schema';
import type { Category } from '../types/game';
import type { Database } from './db';

/**
 * Retrieves all categories ordered alphabetically by name.
 *
 * @param db - The database connection used to query category records.
 * @returns A list containing each category's id and name.
 */
export async function getAllCategories(db: Database): Promise<Category[]> {
    return db
        .select({ id: categories.id, name: categories.name })
        .from(categories)
        .orderBy(asc(categories.name));
}
