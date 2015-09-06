
#pragma once

#include <Atomic/Core/Object.h>

using namespace Atomic;

#include "../Platform/Platform.h"

namespace ToolCore
{

class ProjectUserPrefs : public Object
{
    friend class Project;

    OBJECT(ProjectUserPrefs);

public:
    /// Construct.
    ProjectUserPrefs(Context* context);
    /// Destruct.
    virtual ~ProjectUserPrefs();

    // platform used when not specified
    PlatformID GetDefaultPlatform() const { return defaultPlatform_; }

    const String& GetLastBuildPath() { return lastBuildPath_; }
    void SetLastBuildPath(const String& path) { lastBuildPath_ = path; }

private:

    bool Load(const String& path);
    void Save(const String& path);

    PlatformID defaultPlatform_;
    String lastBuildPath_;

};

}
