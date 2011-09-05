using System.Collections.Generic;
using System.Windows.Controls;

namespace Jounce.Regions.Adapters
{
    /// <summary>
    /// Region adapter for <see cref="ItemsControl"/>
    /// </summary>
    /// <remarks>
    /// Simply adds views to the items control - view models should respond to navigation events to 
    /// hide/show as needed.
    /// </remarks>
    [RegionAdapterFor(typeof(ItemsControl))]
    public class ItemsRegion : RegionAdapterBase<ItemsControl> 
    {
        /// <summary>
        ///     Keep track of views already added
        /// </summary>
        private readonly List<string> _addedViews = new List<string>();

        /// <summary>
        ///     Activates a control for a region
        /// </summary>
        /// <param name="viewName">The name of the control</param>
        /// <param name="targetRegion">The name of the region</param>
        public override void ActivateControl(string viewName, string targetRegion)
        {
            ValidateControlName(viewName);
            ValidateRegionName(targetRegion);

            var region = Regions[targetRegion];

            if (!_addedViews.Contains(viewName))
            {
                _addedViews.Add(viewName);
                region.Items.Add(Controls[viewName]);   
            }                     
        }        
    }
}
