using System;
using System.Collections.Generic;
using Jounce.Core.ViewModel;
using Jounce.Core.Workflow;
using Jounce.Framework;
using Jounce.Framework.Workflow;

namespace NavigationWithBackButton.ViewModels
{
    [ExportAsViewModel("Clock")]
    public class ClockViewModel : ContentViewModel  
    {
        public ClockViewModel()
        {
            if (InDesigner)
            {
                Time = DateTime.Now.ToLongTimeString();
            }
        }

        public string Time { get; set; }

        protected override void InitializeVm()
        {
            WorkflowController.Begin(ClockWorkflow());
            base.InitializeVm();
        }

        public IEnumerable<IWorkflow> ClockWorkflow()
        {
            var workflowDelay = new WorkflowDelay(TimeSpan.FromSeconds(1));

            while (true)
            {
                yield return workflowDelay;
                Time = DateTime.Now.ToLongTimeString();
                JounceHelper.ExecuteOnUI(()=>RaisePropertyChanged(()=>Time));
            }
        }
    }
}