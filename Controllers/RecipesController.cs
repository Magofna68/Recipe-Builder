using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reactProj.Models;

namespace reactProj.Controllers;

    [ApiController]
    [Route("api/[controller]")]
    public class RecipesController : ControllerBase
    {
        private readonly RecipeDbContext _context;

        public RecipesController(RecipeDbContext context)
        {
            _context = context;
        }

        // GET: api/Recipe
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RecipeDetail>>> GetRecipes()
        {
          if (_context.Recipes == null)
          {
              return NotFound();
          }
            return await _context.Recipes.ToListAsync();
        }

        // GET: api/Recipe/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipeDetail>> GetRecipeDetail(int id)
        {
          if (_context.Recipes == null)
          {
              return NotFound();
          }
            var recipeDetail = await _context.Recipes.FindAsync(id);

            if (recipeDetail == null)
            {
                return NotFound();
            }

            return recipeDetail;
        }

        // PUT: api/Recipe/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecipeDetail(int id, RecipeDetail recipeDetail)
        {
            if (id != recipeDetail.id)
            {
                return BadRequest();
            }

            _context.Entry(recipeDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecipeDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Recipe
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RecipeDetail>> PostRecipeDetail(RecipeDetail recipeDetail)
        {
          if (_context.Recipes == null)
          {
              return Problem("Entity set 'RecipeDbContext.Recipes'  is null.");
          }
            _context.Recipes.Add(recipeDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecipeDetail", new { id = recipeDetail.id }, recipeDetail);
        }

        // DELETE: api/Recipe/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipeDetail(int id)
        {
            if (_context.Recipes == null)
            {
                return NotFound();
            }
            var recipeDetail = await _context.Recipes.FindAsync(id);
            if (recipeDetail == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipeDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RecipeDetailExists(int id)
        {
            return (_context.Recipes?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }

